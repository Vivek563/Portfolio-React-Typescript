import Form from "./Form";
import SleepingPanda from "./SleepingPanda";

function Connect() {
  return (
    <>
      <section className="connect">
        <div className="pandascenter">
        <SleepingPanda/>
        </div>
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}

export default Connect;
