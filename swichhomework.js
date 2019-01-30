const timeAdder = (value1, label1, value2, label2) => {
    let time;
    let value3;
    let label3;
    if ((typeof (value1) === "number") && (typeof (value2) === "number")) {
        if ((typeof (label1) === "string") && (typeof (label2) === "string")) {

            switch ((value1 > 0 && value2 > 0) && (Number.isInteger(value1) && Number.isInteger(value2))) {
                case (value1 === 1 && value2 === 1):
                    if ((label1 === "days" || label1 === "hours" || label1 === "minutes" || label1 === "seconds") || (label2 === "days" || label2 === "hours" || label2 === "minutes" || label2 === "seconds")) {
                        time = false;
                        console.log(time);
                        break;
                    }
                    switch (label1 === "day" || label1 === "hour" || label1 === "minute" || label1 === "second") {
                        case label1 === "day" && label2 === "day":
                        case label1 === "hour" && label2 === "hour":
                        case label1 === "minute" && label2 === "minute":
                        case label1 === "second" && label2 === "second":
                            value3 = value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "day" && label2 === "second":
                            value3 = 86400 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "second":
                            value3 = 3600 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "minute" && label2 === "second":
                            value3 = 60 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "day" && label2 === "minute":
                            value3 = 1440 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;

                        case label1 === "day" && label2 === "hour":
                            value3 = 24 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "day":
                            value3 = 24 * value2 + value1;
                            label3 = label1 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "minute":
                            value3 = 60 * value1 + value2;
                            label3 = label2 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "day":
                            value3 = 86400 * value2 + value1;
                            label3 = label1 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "hour":
                            value3 = 3600 * value2 + value1;
                            label3 = label1 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "minute":
                            value3 = 60 * value2 + value1;
                            label3 = label1 + "s";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        default:
                            time = false;
                            console.log(time);
                            break;
                    }
                    break;
                case value1 === 1 && value2 !== 1 :
                    if (value1 === 1 && (label1 === "days" || label1 === "hours" || label1 === "minutes" || label1 === "seconds")) {
                        time = false;
                        console.log(time);
                        break;
                    }
                    switch (label1 === "day" || label1 === "hour" || label1 === "minute" || label1 === "second") {
                        case label1 === "day" && label2 === "days":
                        case label1 === "hour" && label2 === "hours":
                        case label1 === "minute" && label2 === "minutes":
                        case label1 === "second" && label2 === "seconds":
                            value3 = value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "day" && label2 === "seconds":
                            value3 = 86400 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "seconds":
                            value3 = 3600 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "minute" && label2 === "seconds":
                            value3 = 60 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "day" && label2 === "minutes":
                            value3 = 1440 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;

                        case label1 === "day" && label2 === "hours":
                            value3 = 24 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "days":
                            value3 = 24 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hour" && label2 === "minutes":
                            value3 = 60 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "days":
                            value3 = 86400 * value2 + value1;
                            label3 = "seconds";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "hours":
                            value3 = 3600 * value2 + value1;
                            label3 = "seconds";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "second" && label2 === "minutes":
                            value3 = 60 * value2 + value1;
                            label3 = "seconds";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        default:
                            time = false;
                            console.log(time);
                            break;
                    }
                    break;
                case (value1 !== 1 && value2 === 1):
                    if (value2 === 1 && (label2 === "days" || label2 === "hours" || label2 === "minutes" || label2 === "seconds")) {
                        time = false;
                        console.log(time);
                        break;
                    }
                    switch (label2 === "day" || label2 === "hour" || label2 === "minute" || label2 === "second") {
                        case label1 === "days" && label2 === "day":
                        case label1 === "hours" && label2 === "hour":
                        case label1 === "minutes" && label2 === "minute":
                        case label1 === "seconds" && label2 === "second":
                            value3 = value1 + value2;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "seconds" && label2 === "day":
                            value3 = 86400 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "seconds" && label2 === "hour":
                            value3 = 3600 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "seconds" && label2 === "minute":
                            value3 = 60 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hours" && label2 === "day":
                            value3 = 24 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "minutes" && label2 === "day":
                            value3 = 1440 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "days" && label2 === "hour":
                            value3 = 24 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "minutes" && label2 === "hour":
                            value3 = 60 * value2 + value1;
                            label3 = label1;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "days" && label2 === "second":
                            value3 = 86400 * value1 + value2;
                            label3 = label2;
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "hours" && label2 === "second":
                            value3 = 3600 * value1 + value2;
                            label3 = "seconds";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        case label1 === "minutes" && label2 === "second":
                            value3 = 60 * value1 + value2;
                            label3 = "seconds";
                            time = [value3, label3];
                            console.log(time);
                            break;
                        default:
                            time = false;
                            console.log(time);
                            break;
                    }
                    break;
                case label1 === "days" && label2 === "days":
                case label1 === "hours" && label2 === "hours":
                case label1 === "minutes" && label2 === "minutes":
                case label1 === "seconds" && label2 === "seconds":
                    value3 = value1 + value2;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "days" && label2 === "seconds":
                    value3 = 86400 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "hours" && label2 === "seconds":
                    value3 = 3600 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "minutes" && label2 === "seconds":
                    value3 = 60 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "seconds" && label2 === "days":
                    value3 = 86400 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "seconds" && label2 === "hours":
                    value3 = 3600 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "seconds" && label2 === "minutes":
                    value3 = 60 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;

                case label1 === "days" && label2 === "minutes":
                    value3 = 1440 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "days" && label2 === "hours":
                    value3 = 24 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "hours" && label2 === "days":
                    value3 = 24 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "minutes" && label2 === "days":
                    value3 = 1440 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "hours" && label2 === "minutes":
                    value3 = 60 * value1 + value2;
                    label3 = label2;
                    time = [value3, label3];
                    console.log(time);
                    break;
                case label1 === "minutes" && label2 === "hours":
                    value3 = 60 * value2 + value1;
                    label3 = label1;
                    time = [value3, label3];
                    console.log(time);
                    break;

                default:
                    time = false;
                    console.log(time);
                    break;
            }

        } else {
            time = false;
            console.log(time);
            console.log("parameter2 and parameter4 should be string");

        }
    } else {
        time = false;
        console.log(time);
        console.log("parameter1 and parameter3 should be number");
    }
};
timeAdder(10, {1:"seconds"}, 1 , "day");



