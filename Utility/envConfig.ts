const Env_Url={
dev:"https://testautomationpractice.blogspot.com/",
qa:"https://testautomationpractice.blogspot.com/",
stage:"https://testautomationpractice.blogspot.com/",
prod:"https://testautomationpractice.blogspot.com/"

}

const EnV=process.env.EnV||"prod"
export const BaseURL=(Env_Url as any )[EnV]