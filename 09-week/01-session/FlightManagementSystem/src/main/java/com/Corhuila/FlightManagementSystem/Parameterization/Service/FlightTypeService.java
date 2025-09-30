package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.FlightType;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IFlightTypeRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IFlightTypeService;

@Service
public class FlightTypeService extends ABaseService<FlightType> implements IFlightTypeService {

    @Override
    protected IBaseRepository<FlightType, String> getRepository() {
        return repository;
    }

    @Autowired
    private IFlightTypeRepository repository;

}
