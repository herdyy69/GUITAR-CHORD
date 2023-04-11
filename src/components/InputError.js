const InputError = ({ messages = [], className = '' }) => {


  return(
    <>
      {messages.length > 0 && (
        <>
          {messages.map((message, index) => (
            <p key={index} class="mt-1 text-xs text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> {message}.</p>
          ))}
        </>
      )}
    </>,
  )
}

export default InputError
