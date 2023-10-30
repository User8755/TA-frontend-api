function Option(props) {
  return (
    <option
      value={JSON.stringify(props.item)}
      className='data'
      label={props.item.name}
    ></option>
  );
}

export default Option;
