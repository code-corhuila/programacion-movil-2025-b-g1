package com.Corhuila.FlightManagementSystem.Parameterization.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Corhuila.FlightManagementSystem.Parameterization.Entity.DocumentType;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IBaseRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IRepository.IDocumentTypeRepository;
import com.Corhuila.FlightManagementSystem.Parameterization.IService.IDocumentTypeService;

@Service
public class DocumentTypeService extends ABaseService<DocumentType> implements IDocumentTypeService {

    @Override
    protected IBaseRepository<DocumentType, String> getRepository() {
        return repository;
    }

    @Autowired
	private IDocumentTypeRepository repository;

}
