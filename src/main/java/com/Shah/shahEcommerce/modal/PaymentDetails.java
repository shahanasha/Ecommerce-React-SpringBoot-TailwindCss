package com.Shah.shahEcommerce.modal;

import lombok.Data;

@Data
public class PaymentDetails {

    private String paymentMethod;
    private String status;
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String RazorpayPaymentLinkReferenceId;
    private String RazorpayPaymentId;
}
