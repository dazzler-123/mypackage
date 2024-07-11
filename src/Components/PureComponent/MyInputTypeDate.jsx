import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
// import "dayjs/locale/hi";
// import "dayjs/locale/ar";
// import "../Style.css";

const MyDate = ({
  dispatchername,
  validation,
  name,
  multiLanguage,
  label,
  handleOnChange,
  mindate,
  setCleared,
  maxdate,
  control,
  i18n,
  isInvalid,
  inputError,
  dobPlaceHolder,
  format,
  helperText
}) => {
  return (
    <div className="input-wrapper date-input">
      <Controller
        control={control}
        name={dispatchername}
        rules={validation}
        render={({ field: { onChange, value } }) => {
          return (
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={i18n.language}
            >
              <DatePicker
                name={name}
                label={multiLanguage(label)}
                className="input-field date-picker"
                onChange={(date) => {
                  onChange(date);
                  handleOnChange(date);
                }}
                value={value ? dayjs(value, "DD-MM-YYYY") : null}
                format={format}
                placeholder={multiLanguage(dobPlaceHolder)}
                minDate={mindate}
                maxDate={maxdate}
                views={["year", "month", "day"]}
                slotProps={{
                  textField: {
                    error: isInvalid,
                    helperText: helperText,
                  },
                  field: { clearable: true, onClear: () => setCleared(true) },
                }}
              />
            </LocalizationProvider>
          );
        }}
      />
    </div>
  );
};

export default MyDate;
