package com.Corhuila.FlightManagementSystem.Parameterization.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.AircraftType;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IAircraftTypeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/AircraftType")
public class AircraftTypeController extends ABaseController<AircraftType, IAircraftTypeService> {

    public AircraftTypeController(IAircraftTypeService service) {
        super(service, "AircraftType");
    }

}
