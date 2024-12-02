export const handleChange = (setChange) => ({target: {value}}) => {
  setChange(value);
  console.log(value);
}