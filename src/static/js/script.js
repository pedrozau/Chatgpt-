// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response =  fetch(`https://chatgpt-ria0.onrender.com/api/v1/chat/${input}`)

  response.then(function(response){
    response.json().then(function(response){

      message = document.createElement('div');
      message.classList.add('chatbot-message','chatbot');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${JSON.parse(response.data.content)}</p>`;
      conversation.appendChild(message);
      message.scrollIntoView({behavior: "smooth"});

    })


  })

  // Add chatbot response to conversation
 
});

// Generate chatbot response function

  


