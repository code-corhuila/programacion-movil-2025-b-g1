package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.AircraftType;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IAircraftTypeRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IAircraftTypeService;

@Service
public class AircraftTypeService extends ABaseService<AircraftType> implements IAircraftTypeService {

    @Override
    protected IBaseRepository<AircraftType, String> getRepository() {
        return repository;
    }

    @Autowired
    private IAircraftTypeRepository repository;

}
