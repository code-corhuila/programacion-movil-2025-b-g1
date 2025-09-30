package com.Corhuila.FlightManagementSystem.Parameterization.IService;

import java.util.List;
import java.util.Optional;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.Person;

public interface IPersonService extends IBaseService<Person> {
    
    /**
     * Find a person by email address
     * @param email The email to search for
     * @return Optional containing the person if found
     * @throws Exception If an error occurs while searching
     */
    Optional<Person> findByEmail(String email) throws Exception;
    
    /**
     * Find persons by first name (case insensitive)
     * @param firstName The first name to search for
     * @return List of persons with matching first name
     * @throws Exception If an error occurs while searching
     */
    List<Person> findByFirstName(String firstName) throws Exception;
    
    /**
     * Find persons by last name (case insensitive)
     * @param lastName The last name to search for
     * @return List of persons with matching last name
     * @throws Exception If an error occurs while searching
     */
    List<Person> findByLastName(String lastName) throws Exception;
    
    /**
     * Find persons by gender
     * @param gender The gender to search for
     * @return List of persons with matching gender
     * @throws Exception If an error occurs while searching
     */
    List<Person> findByGender(Person.Gender gender) throws Exception;
    
    /**
     * Find persons by age range
     * @param minAge Minimum age
     * @param maxAge Maximum age
     * @return List of persons within the age range
     * @throws Exception If an error occurs while searching
     */
    List<Person> findByAgeRange(Integer minAge, Integer maxAge) throws Exception;
    
    /**
     * Check if email exists (excluding deleted records)
     * @param email The email to check
     * @return true if email exists, false otherwise
     * @throws Exception If an error occurs while checking
     */
    boolean emailExists(String email) throws Exception;
    
    /**
     * Validate person data before saving
     * @param person The person to validate
     * @throws Exception If validation fails
     */
    void validatePerson(Person person) throws Exception;
}