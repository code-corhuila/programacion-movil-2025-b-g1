package com.Corhuila.FlightManagementSystem.Parameterization.IRepository;

import org.springframework.stereotype.Repository;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.FlightType;

@Repository
public interface IFlightTypeRepository extends IBaseRepository<FlightType, String> {
    
}
