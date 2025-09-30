package com.Corhuila.FlightManagementSystem.Parameterization.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Corhuila.FlightManagementSystem.Parameterization.DTO.ApiResponseDto;
import com.Corhuila.FlightManagementSystem.Parameterization.Entity.Person;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IPersonService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/person")
@Tag(name = "Person", description = "Person management endpoints")
public class PersonController extends ABaseController<Person, IPersonService> {

    public PersonController(IPersonService service) {
        super(service, "Person");
    }

    @Operation(summary = "Find person by email", description = "Retrieves a person by their email address")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Person found successfully"),
        @ApiResponse(responseCode = "404", description = "Person not found"),
        @ApiResponse(responseCode = "400", description = "Invalid email format")
    })
    @GetMapping("/email/{email}")
    public ResponseEntity<ApiResponseDto<Person>> findByEmail(
            @Parameter(description = "Email address to search for", example = "john.doe@example.com")
            @PathVariable String email) {
        try {
            var person = service.findByEmail(email);
            if (person.isPresent()) {
                return ResponseEntity.ok(new ApiResponseDto<>("Person found", person.get(), true));
            } else {
                return ResponseEntity.ok(new ApiResponseDto<>("Person not found", null, false));
            }
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error searching person: " + e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Find persons by first name", description = "Retrieves persons by their first name (case insensitive)")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Search completed successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid first name")
    })
    @GetMapping("/first-name/{firstName}")
    public ResponseEntity<ApiResponseDto<List<Person>>> findByFirstName(
            @Parameter(description = "First name to search for", example = "John")
            @PathVariable String firstName) {
        try {
            List<Person> persons = service.findByFirstName(firstName);
            return ResponseEntity.ok(new ApiResponseDto<>("Search completed", persons, true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error searching persons: " + e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Find persons by last name", description = "Retrieves persons by their last name (case insensitive)")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Search completed successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid last name")
    })
    @GetMapping("/last-name/{lastName}")
    public ResponseEntity<ApiResponseDto<List<Person>>> findByLastName(
            @Parameter(description = "Last name to search for", example = "Doe")
            @PathVariable String lastName) {
        try {
            List<Person> persons = service.findByLastName(lastName);
            return ResponseEntity.ok(new ApiResponseDto<>("Search completed", persons, true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error searching persons: " + e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Find persons by gender", description = "Retrieves persons by their gender")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Search completed successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid gender")
    })
    @GetMapping("/gender/{gender}")
    public ResponseEntity<ApiResponseDto<List<Person>>> findByGender(
            @Parameter(description = "Gender to search for", example = "MALE")
            @PathVariable Person.Gender gender) {
        try {
            List<Person> persons = service.findByGender(gender);
            return ResponseEntity.ok(new ApiResponseDto<>("Search completed", persons, true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error searching persons: " + e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Find persons by age range", description = "Retrieves persons within a specified age range")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Search completed successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid age range")
    })
    @GetMapping("/age-range")
    public ResponseEntity<ApiResponseDto<List<Person>>> findByAgeRange(
            @Parameter(description = "Minimum age", example = "18")
            @RequestParam Integer minAge,
            @Parameter(description = "Maximum age", example = "65")
            @RequestParam Integer maxAge) {
        try {
            List<Person> persons = service.findByAgeRange(minAge, maxAge);
            return ResponseEntity.ok(new ApiResponseDto<>("Search completed", persons, true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error searching persons: " + e.getMessage(), null, false));
        }
    }

    @Operation(summary = "Check if email exists", description = "Checks if an email address already exists in the system")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Check completed successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid email format")
    })
    @GetMapping("/email-exists/{email}")
    public ResponseEntity<ApiResponseDto<Boolean>> emailExists(
            @Parameter(description = "Email address to check", example = "john.doe@example.com")
            @PathVariable String email) {
        try {
            boolean exists = service.emailExists(email);
            return ResponseEntity.ok(new ApiResponseDto<>("Email check completed", exists, true));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponseDto<>("Error checking email: " + e.getMessage(), null, false));
        }
    }
}