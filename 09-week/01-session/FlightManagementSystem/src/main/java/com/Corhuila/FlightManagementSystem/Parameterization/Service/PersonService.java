package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.Person;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IPersonRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IPersonService;

@Service
public class PersonService extends ABaseService<Person> implements IPersonService {

    @Override
    protected IBaseRepository<Person, String> getRepository() {
        return repository;
    }

    @Autowired
    private IPersonRepository repository;

    // Email validation pattern
    private static final Pattern EMAIL_PATTERN = Pattern.compile(
        "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$"
    );

    @Override
    public Optional<Person> findByEmail(String email) throws Exception {
        try {
            if (email == null || email.trim().isEmpty()) {
                throw new Exception("Email cannot be null or empty");
            }
            return repository.findByEmail(email.trim().toLowerCase());
        } catch (Exception e) {
            throw new Exception("Error searching person by email: " + e.getMessage());
        }
    }

    @Override
    public List<Person> findByFirstName(String firstName) throws Exception {
        try {
            if (firstName == null || firstName.trim().isEmpty()) {
                throw new Exception("First name cannot be null or empty");
            }
            return repository.findByFirstNameContainingIgnoreCase(firstName.trim());
        } catch (Exception e) {
            throw new Exception("Error searching persons by first name: " + e.getMessage());
        }
    }

    @Override
    public List<Person> findByLastName(String lastName) throws Exception {
        try {
            if (lastName == null || lastName.trim().isEmpty()) {
                throw new Exception("Last name cannot be null or empty");
            }
            return repository.findByLastNameContainingIgnoreCase(lastName.trim());
        } catch (Exception e) {
            throw new Exception("Error searching persons by last name: " + e.getMessage());
        }
    }

    @Override
    public List<Person> findByGender(Person.Gender gender) throws Exception {
        try {
            if (gender == null) {
                throw new Exception("Gender cannot be null");
            }
            return repository.findByGender(gender);
        } catch (Exception e) {
            throw new Exception("Error searching persons by gender: " + e.getMessage());
        }
    }

    @Override
    public List<Person> findByAgeRange(Integer minAge, Integer maxAge) throws Exception {
        try {
            if (minAge == null || maxAge == null) {
                throw new Exception("Age range parameters cannot be null");
            }
            if (minAge < 0 || maxAge < 0) {
                throw new Exception("Age values must be non-negative");
            }
            if (minAge > maxAge) {
                throw new Exception("Minimum age cannot be greater than maximum age");
            }
            return repository.findByAgeBetween(minAge, maxAge);
        } catch (Exception e) {
            throw new Exception("Error searching persons by age range: " + e.getMessage());
        }
    }

    @Override
    public boolean emailExists(String email) throws Exception {
        try {
            if (email == null || email.trim().isEmpty()) {
                return false;
            }
            return repository.existsByEmail(email.trim().toLowerCase());
        } catch (Exception e) {
            throw new Exception("Error checking if email exists: " + e.getMessage());
        }
    }

    @Override
    public void validatePerson(Person person) throws Exception {
        if (person == null) {
            throw new Exception("Person cannot be null");
        }

        // Validate first name
        if (person.getFirstName() == null || person.getFirstName().trim().isEmpty()) {
            throw new Exception("First name is required");
        }
        if (person.getFirstName().length() > 50) {
            throw new Exception("First name must not exceed 50 characters");
        }

        // Validate last name
        if (person.getLastName() == null || person.getLastName().trim().isEmpty()) {
            throw new Exception("Last name is required");
        }
        if (person.getLastName().length() > 50) {
            throw new Exception("Last name must not exceed 50 characters");
        }

        // Validate age
        if (person.getAge() == null) {
            throw new Exception("Age is required");
        }
        if (person.getAge() < 0 || person.getAge() > 150) {
            throw new Exception("Age must be between 0 and 150");
        }

        // Validate gender
        if (person.getGender() == null) {
            throw new Exception("Gender is required");
        }

        // Validate email
        if (person.getEmail() == null || person.getEmail().trim().isEmpty()) {
            throw new Exception("Email is required");
        }
        if (!EMAIL_PATTERN.matcher(person.getEmail()).matches()) {
            throw new Exception("Invalid email format");
        }
        if (person.getEmail().length() > 100) {
            throw new Exception("Email must not exceed 100 characters");
        }

        // Validate address
        if (person.getAddress() == null || person.getAddress().trim().isEmpty()) {
            throw new Exception("Address is required");
        }
        if (person.getAddress().length() > 255) {
            throw new Exception("Address must not exceed 255 characters");
        }
    }

    @Override
    public Person save(Person entity) throws Exception {
        try {
            // Validate person data
            validatePerson(entity);
            
            // Normalize email to lowercase
            entity.setEmail(entity.getEmail().trim().toLowerCase());
            
            // Check if email already exists
            if (emailExists(entity.getEmail())) {
                throw new Exception("Email already exists in the system");
            }
            
            // Trim and capitalize names
            entity.setFirstName(capitalizeFirstLetter(entity.getFirstName().trim()));
            entity.setLastName(capitalizeFirstLetter(entity.getLastName().trim()));
            entity.setAddress(entity.getAddress().trim());
            
            return super.save(entity);
        } catch (Exception e) {
            throw new Exception("Error saving person: " + e.getMessage());
        }
    }

    @Override
    public void update(String id, Person entity) throws Exception {
        try {
            // Validate person data
            validatePerson(entity);
            
            // Get existing person to check email change
            Optional<Person> existingPerson = findById(id);
            if (existingPerson.isPresent()) {
                String newEmail = entity.getEmail().trim().toLowerCase();
                String existingEmail = existingPerson.get().getEmail();
                
                // If email is changing, check if new email already exists
                if (!newEmail.equals(existingEmail) && emailExists(newEmail)) {
                    throw new Exception("Email already exists in the system");
                }
            }
            
            // Normalize email to lowercase
            entity.setEmail(entity.getEmail().trim().toLowerCase());
            
            // Trim and capitalize names
            entity.setFirstName(capitalizeFirstLetter(entity.getFirstName().trim()));
            entity.setLastName(capitalizeFirstLetter(entity.getLastName().trim()));
            entity.setAddress(entity.getAddress().trim());
            
            super.update(id, entity);
        } catch (Exception e) {
            throw new Exception("Error updating person: " + e.getMessage());
        }
    }

    /**
     * Helper method to capitalize the first letter of a string
     * @param str The string to capitalize
     * @return The capitalized string
     */
    private String capitalizeFirstLetter(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }
        return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
    }
}