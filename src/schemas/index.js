import * as Yup from "yup";

export const initalValuesBookingType = {
    title: "",
    url: "",
    description: "",
    duration: 0,
    paddingMinutes: 0,
    latestAvailabilityDays: 0,
    redirectUrl: "",
    location: "O",
    requiredPayment: false,
};

export const schemaBookingType = Yup.object().shape({
    title: Yup.string().min(3).required(),
    url: Yup.string().required(),
    description: Yup.string().nullable(true),
    duration: Yup.number().required(),
    paddingMinutes: Yup.number().required(),
    latestAvailabilityDays: Yup.number().required(),
    redirectUrl: Yup.string().url().nullable(true),
});

/*
export const schemaBookingTypeItem = Yup.object().shape({
    from: Yup.string().min(3).matches(patternHour).required(),
    to: Yup.string().matches(patternHour).required(),
});
*/
