package com.Corhuila.FlightManagementSystem.Parameterization.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.FlightType;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IFlightTypeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/FlightType")
public class FlightTypeController extends ABaseController<FlightType, IFlightTypeService> {

    public FlightTypeController(IFlightTypeService service) {
        super(service, "FlightType");
    }

}
