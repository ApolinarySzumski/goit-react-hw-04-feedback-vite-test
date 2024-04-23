import "./App.css";

import Section from "./components/Section";

function App() {
  // const [options, setOptions] = useState(INITIAL_OPTIONS);

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e);
  //   setOptions((prev) => ({
  //     ...prev,
  //     [e.target.name]: prev[e.target.name] + 1,
  //   }));
  // };

  return (
    <>
      <Section title="Please leave feedback">
        {/* <FeedbackOptions
          options={Object.keys(options)}
          handleClick={handleClick}
        /> */}
      </Section>
      {/* <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statictics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section> */}
    </>
  );
}

export default App;
