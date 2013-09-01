Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};

Date.prototype.getShortMonthName = function () {
    return this.getMonthName().substr(0, 3);
};

Date.sameDays = function (dateA, dateB) {
  return (dateA.getFullYear() === dateB.getFullYear() &&
          dateA.getMonth() === dateB.getMonth() &&
          dateA.getDay() === dateB.getDay());
}