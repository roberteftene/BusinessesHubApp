package com.businesshub.be.controller;

import com.businesshub.be.exceptions.MissingSubscriptionException;
import com.businesshub.be.models.EPeriod;
import com.businesshub.be.models.ServiceModel;
import com.businesshub.be.payload.request.CommunityImportanceTop;
import com.businesshub.be.payload.request.GraphicRequestBody;
import com.businesshub.be.service.BusinessesService.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    BusinessService businessService;

    @PostMapping("/{id}")
    @ResponseBody
    @PreAuthorize("hasRole('BUSINESSOWNER') or hasRole('ADMIN')")
    public ServiceModel addService(@RequestBody ServiceModel serviceModel, @PathVariable(value = "id") long id) throws MissingSubscriptionException {
        return businessService.addService(serviceModel,id);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('BUSINESSOWNER') or hasRole('ADMIN')")
    public List<ServiceModel> getServicesByUserId(@PathVariable(value = "id") long id) {
        return  businessService.getAllServicesByUserId(id);
    }

    @GetMapping
    public List<ServiceModel> getAllServices() {
        return  businessService.getAllServices();
    }

    @PostMapping("/communityTop")
    public List<ServiceModel> getCommunityTop(@RequestBody CommunityImportanceTop communityImportanceTop) {
        return businessService.computeCommunityTop(communityImportanceTop.getNoReviewsImportanceIndex(),communityImportanceTop.getRatingImportanceIndex());
    }

    @GetMapping("/presentation/{id}")
    public ServiceModel getServiceById(@PathVariable(value = "id") Integer id) {
        return businessService.getServiceById(id);
    }

    @PostMapping("/graphicData/{id}/{period}")
    @PreAuthorize("hasRole('BUSINESSOWNER') or hasRole('ADMIN')")
    public Map<String ,Integer> getGraphicData(@PathVariable(value = "id") int id, @PathVariable(value = "period") EPeriod period) {
        return businessService.getReviewsDataForBarchartGraphic(id,period);
    }
}
