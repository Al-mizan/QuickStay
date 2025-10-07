import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "cally";

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

DatePicker.defaultProps = {
  placeholder: "Pick a date",
  minDate: "",
  maxDate: "",
  defaultValue: "",
  onChange: () => {},
  required: false,
};

export default function DatePicker({
  id,
  placeholder,
  minDate,
  maxDate,
  defaultValue,
  onChange,
  required,
}) {
  const calendarRef = useRef(null);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const calendar = calendarRef.current;
    const popover = popoverRef.current;

    const handleChange = (e) => {
      const newDate = e.target.value;
      setValue(newDate);
      setOpen(false);
      popover.hidePopover();

      // Call the onChange prop to notify parent component
      if (onChange) {
        onChange(newDate);
      }
    };

    const handleClickOutside = (e) => {
      if (
        popover &&
        !popover.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
        popover.hidePopover();
      }
    };

    calendar.addEventListener("change", handleChange);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      calendar.removeEventListener("change", handleChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onChange]);

  const togglePopover = () => {
    const popover = popoverRef.current;
    if (!popover) return;

    if (open) {
      popover.hidePopover();
      setOpen(false);
    } else {
      popover.showPopover();
      setOpen(true);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={togglePopover}
        className={`input input-border dark:bg-white/10 dark:border-gray-300 ${
          required && !value ? "border-red-500" : ""
        }`}
        id={`cally-button-${id}`}
        style={{ anchorName: `--cally-${id}` }}
      >
        {value || placeholder}
      </button>

      <div
        ref={popoverRef}
        popover="true"
        id={`cally-popover-${id}`}
        className="dropdown rounded-box shadow-lg border border-gray-300 bg-white"
        style={{ positionAnchor: `--cally-${id}` }}
      >
        <calendar-date
          ref={calendarRef}
          className="cally"
          min={minDate}
          max={maxDate}
          value={value}
          required={required}
        >
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>

          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>

          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </>
  );
}
