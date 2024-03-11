package com.Shah.shahEcommerce.modal;

import jakarta.persistence.Column;

import java.time.LocalDate;

public class PaymentInfo {

    @Column(name = "cardholder_name")
    private String cardholderName;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "expiration_date")
    private LocalDate expirationDate;

    private String cvv;

}
