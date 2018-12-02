exports.run = (event, context) => {
  // It's glorious
  const time = new Date()
  console.log(`Your cron function "${context.functionName}" ran at ${time}`)
}
