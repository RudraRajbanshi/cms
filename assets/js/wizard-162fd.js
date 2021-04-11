"use strict";
var KTWizard1 = (function() {
    var t,
        e,
        i,
        s = [];
    return {
        init: function() {
            (t = KTUtil.getById("kt_wizard")),
            (e = KTUtil.getById("kt_form")),
            s.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            address1: {
                                validators: { notEmpty: { message: "Address is required" } },
                            },
                            address2: {
                                validators: { notEmpty: { message: "Address2 is required" } },
                            },
                            postcode: {
                                validators: { notEmpty: { message: "Postcode is required" } },
                            },
                            city: {
                                validators: { notEmpty: { message: "City is required" } },
                            },
                            state: {
                                validators: { notEmpty: { message: "State is required" } },
                            },
                            country: {
                                validators: { notEmpty: { message: "Country is required" } },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap({
                                eleValidClass: "",
                            }),
                        },
                    })
                ),
                s.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            package: {
                                validators: {
                                    notEmpty: { message: "Package details is required" },
                                },
                            },
                            weight: {
                                validators: {
                                    notEmpty: { message: "Package weight is required" },
                                    digits: { message: "The value added is not valid" },
                                },
                            },
                            width: {
                                validators: {
                                    notEmpty: { message: "Package width is required" },
                                    digits: { message: "The value added is not valid" },
                                },
                            },
                            height: {
                                validators: {
                                    notEmpty: { message: "Package height is required" },
                                    digits: { message: "The value added is not valid" },
                                },
                            },
                            packagelength: {
                                validators: {
                                    notEmpty: { message: "Package length is required" },
                                    digits: { message: "The value added is not valid" },
                                },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap({
                                eleValidClass: "",
                            }),
                        },
                    })
                ),
                s.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            delivery: {
                                validators: {
                                    notEmpty: { message: "Delivery type is required" },
                                },
                            },
                            packaging: {
                                validators: {
                                    notEmpty: { message: "Packaging type is required" },
                                },
                            },
                            preferreddelivery: {
                                validators: {
                                    notEmpty: {
                                        message: "Preferred delivery window is required",
                                    },
                                },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap({
                                eleValidClass: "",
                            }),
                        },
                    })
                ),
                s.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            locaddress1: {
                                validators: { notEmpty: { message: "Address is required" } },
                            },
                            locpostcode: {
                                validators: { notEmpty: { message: "Postcode is required" } },
                            },
                            loccity: {
                                validators: { notEmpty: { message: "City is required" } },
                            },
                            locstate: {
                                validators: { notEmpty: { message: "State is required" } },
                            },
                            loccountry: {
                                validators: { notEmpty: { message: "Country is required" } },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap({
                                eleValidClass: "",
                            }),
                        },
                    })
                ),
                (i = new KTWizard(t, { startStep: 1, clickableSteps: !1 })).on(
                    "change",
                    function(t) {
                        if (!(t.getStep() > t.getNewStep())) {
                            var e = s[t.getStep() - 1];
                            return (
                                e &&
                                e.validate().then(function(e) {
                                    "Valid" == e
                                        ?
                                        (t.goTo(t.getNewStep()), KTUtil.scrollTop()) :
                                        Swal.fire({
                                            text: "Sorry, looks like there are some errors detected, please try again.",
                                            icon: "error",
                                            buttonsStyling: !1,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn font-weight-bold btn-light",
                                            },
                                        }).then(function() {
                                            KTUtil.scrollTop();
                                        });
                                }), !1
                            );
                        }
                    }
                ),
                i.on("changed", function(t) {
                    KTUtil.scrollTop();
                }),
                i.on("submit", function(t) {
                    Swal.fire({
                        text: "All is good! Please confirm the form submission.",
                        icon: "success",
                        showCancelButton: !0,
                        buttonsStyling: !1,
                        confirmButtonText: "Yes, submit!",
                        cancelButtonText: "No, cancel",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-primary",
                            cancelButton: "btn font-weight-bold btn-default",
                        },
                    }).then(function(t) {
                        t.value ?
                            e.submit() :
                            "cancel" === t.dismiss &&
                            Swal.fire({
                                text: "Your form has not been submitted!.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn font-weight-bold btn-primary",
                                },
                            });
                    });
                });
        },
    };
})();
jQuery(document).ready(function() {
    KTWizard1.init();
});