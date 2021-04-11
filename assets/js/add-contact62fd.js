"use strict";
var KTContactsAdd = (function() {
    var t,
        e,
        o,
        a = [];
    return {
        init: function() {
            (t = KTUtil.getById("kt_contact_add")),
            (e = KTUtil.getById("kt_contact_add_form")),
            (o = new KTWizard(t, { startStep: 1, clickableSteps: !1 })).on(
                    "change",
                    function(t) {
                        if (!(t.getStep() > t.getNewStep())) {
                            var e = a[t.getStep() - 1];
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
                o.on("changed", function(t) {
                    KTUtil.scrollTop();
                }),
                o.on("submit", function(t) {
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
                }),
                a.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            firstname: {
                                validators: { notEmpty: { message: "First Name is required" } },
                            },
                            lastname: {
                                validators: { notEmpty: { message: "Last Name is required" } },
                            },
                            companyname: {
                                validators: {
                                    notEmpty: { message: "Company Name is required" },
                                },
                            },
                            phone: {
                                validators: {
                                    notEmpty: { message: "Phone is required" },
                                    phone: {
                                        country: "US",
                                        message: "The value is not a valid US phone number. (e.g 5554443333)",
                                    },
                                },
                            },
                            email: {
                                validators: {
                                    notEmpty: { message: "Email is required" },
                                    emailAddress: {
                                        message: "The value is not a valid email address",
                                    },
                                },
                            },
                            companywebsite: {
                                validators: {
                                    notEmpty: { message: "Website URL is required" },
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
                a.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            communication: {
                                validators: {
                                    choice: {
                                        min: 1,
                                        message: "Please select at least 1 option",
                                    },
                                },
                            },
                            language: {
                                validators: {
                                    notEmpty: { message: "Please select a language" },
                                },
                            },
                            timezone: {
                                validators: {
                                    notEmpty: { message: "Please select a timezone" },
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
                a.push(
                    FormValidation.formValidation(e, {
                        fields: {
                            address1: {
                                validators: { notEmpty: { message: "Address is required" } },
                            },
                            postcode: {
                                validators: { notEmpty: { message: "Postcode is required" } },
                            },
                            city: {
                                validators: { notEmpty: { message: "City is required" } },
                            },
                            state: {
                                validators: { notEmpty: { message: "state is required" } },
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
                new KTImageInput("kt_contact_add_avatar");
        },
    };
})();
jQuery(document).ready(function() {
    KTContactsAdd.init();
});