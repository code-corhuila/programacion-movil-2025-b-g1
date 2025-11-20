package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.TicketClass;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.ITicketClassRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.ITicketClassService;

@Service
public class TicketClassService extends ABaseService<TicketClass> implements ITicketClassService {

    @Override
    protected IBaseRepository<TicketClass, String> getRepository() {
        return repository;
    }

    @Autowired
    private ITicketClassRepository repository;

}
