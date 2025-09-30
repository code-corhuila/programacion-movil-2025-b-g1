package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.CrewRole;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.ICrewRoleRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.ICrewRoleService;

@Service
public class CrewRoleService extends ABaseService<CrewRole> implements ICrewRoleService {

    @Override
    protected IBaseRepository<CrewRole, String> getRepository() {
        return repository;
    }

    @Autowired
    private ICrewRoleRepository repository;

}
