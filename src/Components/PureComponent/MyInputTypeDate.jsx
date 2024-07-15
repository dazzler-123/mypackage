import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const MyDate = ({
  dispatchername,
  validation,
  name,
  multilanguage,
  TextFieldLabel,
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
  helperText,
  dateAdapter,
  dayjs
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
              dateAdapter={dateAdapter}
              adapterLocale={i18n.language}
            >
              <DatePicker
                name={name}
                label={multiLanguage(TextFieldLabel)}
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
