function Drink({ name }) {
  if(name === 'tea') {
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dt>Caffeine content</dt>
          <dd>15–70 mg/cup 80–185 mg/cup</dd>
          <dt>Age</dt>
          <dd> 4,000+ years' 1,000+ years</dd>
        </dl>
      </section>
    );
  }
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  