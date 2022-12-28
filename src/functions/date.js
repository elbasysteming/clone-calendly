import Moment from "moment";
import { extendMoment } from "moment-range";
import "moment/locale/es";

const moment = extendMoment(Moment);

/* Retorna un rango de horas segun la fecha */
export const getRangeHours = (
    from = "00:00",
    to = "00:00",
    duration = 0,
    date
) => {
    const fromDate = from.split(":");
    const toDate = to.split(":");

    const start = moment(date).set({ hour: fromDate[0], minute: fromDate[1] });
    const end = moment(date).set({ hour: toDate[0], minute: toDate[1] });

    const day = moment.range(start, end);

    let values = Array.from(day.by("minutes", { step: duration }));

    values = values.map(element => {
        return {
            data: element._d,
            from: moment(element._d).format("hh:mm A"),
            to: moment(element._d).add(duration, "m").format("hh:mm A"),
        };
    });

    return values;
};

/* Retorna el rango de horario segun una fecha */
export const getRangeData = (availableTime, day) => {
    const data = availableTime;
    const days = data.filter(element => element.day === day.getDay());
    return days[0].schedule[0]
        ? { from: days[0].schedule[0].from, to: days[0].schedule[0].to }
        : false;
};

/* Formato de Dia Mes y Anio*/

export const formatDate = (date, format = "DD MMMM YYYY") => {
    return moment(date).format(format);
};

/* Construye arreglo de dias inactivos para el calendario*/
export const getDisabledDays = booking => {
    const days = [0, 1, 2, 3, 4, 5, 6];

    /*Filtrar los dias habilitados en el check status*/
    const filter = booking.availableTime.filter(
        element => element.status == true
    );

    /*Obtener arreglo de dias habilitados*/
    const daysAvailable = filter.map(element => {
        return element.day;
    });

    /*Comparar dias habilitados vs dias de la semana para obtener arreglo de dias inactivos*/
    const days_disabled = days.filter(element => {
        return daysAvailable.includes(element) === false;
    });

    return days_disabled;
};

/* Valilda el formato HH:MM para las horas */
export const validateHourInput = event => {
    let isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
        event.target.value
    );
    return isValid;
};

/* Retorna el nombre del día de la semana */
export const nameDayOfWeek = dayNumber => {
    let nameDayOfWeek = moment().day(dayNumber).format("dddd");
    return `${nameDayOfWeek.charAt(0).toUpperCase()}${nameDayOfWeek.slice(1)}`;
};

/*Valida que el formato sea el correcto, mejor hacer con yup*/

export const validateTimeFormat = (event, value) => {
    const format = "24";
    let pattern =
        format === "24"
            ? /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
            : /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;

    let isValid = pattern.test(value);

    if (!isValid) {
        event.target.style.border = "1px solid #dc3545";
        event.target.style.outline = "none";
    } else {
        event.target.style.border = "1px solid #dedede";
    }

    return {
        time: { message: "HH:MM(24h)" },
    };
};

/* Valida sin las horas se solapan */
export const checkOverlap = data => {
    console.log(data);
    const checkOverlap = (range, range1, indexes) => {
        /* Validar si se solapan dos rangos */
        if (range.overlaps(range1)) {
            console.log(indexes[0] + indexes[1] + "TRUE: Se solapa");
        } else {
            console.log(indexes[0] + indexes[1] + "FALSE");
        }
    };

    const array = [
        { from: moment("2016-12-06 11:00"), to: moment("2016-12-06 12:00") },
        { from: moment("2016-12-06 13:30"), to: moment("2016-12-06 14:00") },
        { from: moment("2016-12-06 13:59"), to: moment("2016-12-06 14:30") },
    ];

    array.forEach((element, index) => {
        let indexTemp = index;
        let range = moment.range([element.from, element.to]);
        array.forEach((item, index) => {
            let range2 = moment.range([item.from, item.to]);
            if (indexTemp != index && index >= indexTemp) {
                //console.log(indexTemp, index);
                checkOverlap(range, range2, [indexTemp, index]);
            }
        });
    });
};
