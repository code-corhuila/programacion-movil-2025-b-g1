package com.Corhuila.FlightManagementSystem.Parameterization.IRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.Person;

@Repository
public interface IPersonRepository extends IBaseRepository<Person, String> {
    
    /**
     * Find a person by email address
     * @param email The email to search for
     * @return Optional containing the person if found
     */
    Optional<Person> findByEmail(String email);
    
    /**
     * Find persons by first name (case insensitive)
     * @param firstName The first name to search for
     * @return List of persons with matching first name
     */
    @Query("SELECT p FROM Person p WHERE LOWER(p.firstName) LIKE LOWER(CONCAT('%', :firstName, '%')) AND p.deletedAt IS NULL")
    List<Person> findByFirstNameContainingIgnoreCase(@Param("firstName") String firstName);
    
    /**
     * Find persons by last name (case insensitive)
     * @param lastName The last name to search for
     * @return List of persons with matching last name
     */
    @Query("SELECT p FROM Person p WHERE LOWER(p.lastName) LIKE LOWER(CONCAT('%', :lastName, '%')) AND p.deletedAt IS NULL")
    List<Person> findByLastNameContainingIgnoreCase(@Param("lastName") String lastName);
    
    /**
     * Find persons by gender
     * @param gender The gender to search for
     * @return List of persons with matching gender
     */
    @Query("SELECT p FROM Person p WHERE p.gender = :gender AND p.deletedAt IS NULL")
    List<Person> findByGender(@Param("gender") Person.Gender gender);
    
    /**
     * Find persons by age range
     * @param minAge Minimum age
     * @param maxAge Maximum age
     * @return List of persons within the age range
     */
    @Query("SELECT p FROM Person p WHERE p.age BETWEEN :minAge AND :maxAge AND p.deletedAt IS NULL")
    List<Person> findByAgeBetween(@Param("minAge") Integer minAge, @Param("maxAge") Integer maxAge);
    
    /**
     * Check if email exists (excluding deleted records)
     * @param email The email to check
     * @return true if email exists, false otherwise
     */
    @Query("SELECT COUNT(p) > 0 FROM Person p WHERE p.email = :email AND p.deletedAt IS NULL")
    boolean existsByEmail(@Param("email") String email);
}