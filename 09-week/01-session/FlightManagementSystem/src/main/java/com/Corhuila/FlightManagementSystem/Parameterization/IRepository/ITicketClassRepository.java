package com.Corhuila.FlightManagementSystem.Parameterization.IRepository;

import org.springframework.stereotype.Repository;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.TicketClass;

@Repository
public interface ITicketClassRepository extends IBaseRepository<TicketClass, String> {
    
}
