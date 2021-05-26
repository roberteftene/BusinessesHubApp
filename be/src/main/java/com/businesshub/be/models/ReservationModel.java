package com.businesshub.be.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Entity(name = "reservation")
@Data
public class ReservationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "reserv_id")
    private Integer reservId;
    @Column(name = "date")
    private String reservationDate;
    @Column(name = "no_persons")
    private int noPersons;
    @Column(name = "details")
    private String details;
    @Column(name = "client_name")
    private String clientName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id", referencedColumnName = "service_id")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private ServiceModel serviceId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private UserAccountModel userId;

    public ReservationModel(String reservationDate, int noPersons, String details, String clientName) {
        this.reservationDate = reservationDate;
        this.noPersons = noPersons;
        this.details = details;
        this.clientName = clientName;
    }

    public ReservationModel(String reservationDate, int noPersons, String details) {
        this.reservationDate = reservationDate;
        this.noPersons = noPersons;
        this.details = details;
    }

    public ReservationModel() {
    }
}
