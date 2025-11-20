package com.Corhuila.FlightManagementSystem.Parameterization.IRepository;

import org.springframework.stereotype.Repository;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.AircraftType;

@Repository
public interface IAircraftTypeRepository extends IBaseRepository<AircraftType, String> {
    
}
