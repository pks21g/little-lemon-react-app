const Reservation = () => {
  return (
    <div className="card">
      <form class="input-group" action="">
        <input className="input-field" type="date" />
        <input className="input-field" type="time" />
        <input className="input-field" type="number" max={10} />
        <input type="button" class="input-field" value="Reserve" />
      </form>
    </div>
  );
};

export default Reservation;
