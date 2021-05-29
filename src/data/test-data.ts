export const test = [
  {
    id: "all-1",
    question: "Lorem ipsum dolor sit amet consecutur dolor",
    code: `const TestCountdown: React.FC<TestCountdownProps> = ({ isOpen, setTestCountdown }) => {
      const history = useHistory()
      return (
        <IonAlert
              isOpen={isOpen}
              onDidDismiss={() => setTestCountdown(false)}
              cssClass='test-countdown'
              header={"Get ready, ninja!"}
              buttons={[
                {
                  text: 'Go back',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                    history.goBack()
                  }
                },
                {
                  text: 'Start now!',
                  handler: () => {
                    setTestCountdown(false)
                  }
                }
              ]}
            />
      )
    }`,
    language: "react",
    answers: [
      {
        text: "Lorem ipsum dolor",
        correct: true
      },
      {
        text: "Lorem ipsum dolor sit amet consecutur",
        correct: false
      },
      {
        text: "Lorem ipsum dolor sit amet",
        correct: false
      },
    ]
  },
  {
    id: "all-1",
    question: "Lorem ipsum dolor sit amet",
    code: "",
    language: "react",
    answers: [
      {
        text: "Lorem ipsum dolor",
        correct: true
      },
      {
        text: "Lorem ipsum dolor sit amet consecutur",
        correct: false
      },
      {
        text: "Lorem ipsum dolor sit amet",
        correct: false
      },
    ]
  }
]