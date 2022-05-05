import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "teste",
        screenshot: "data:image/png;base64DASDASAD"
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toBeCalled()
    expect(sendMailSpy).toBeCalled()
  })

  it("should not be able to submit without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "teste",
        screenshot: "data:image/png;base64DASDASAD"
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "teste",
        comment: "",
        screenshot: "data:image/png;base64DASDASAD"
      })
    ).rejects.toThrow()
  })

  it("should not be able to submit without a invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "teste",
        comment: "dsadad",
        screenshot: "dsad"
      })
    ).rejects.toThrow()
  })
})
