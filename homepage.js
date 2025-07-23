function displayOutput(section) {
    const outputContainer = document.getElementById('output');
    
    switch (section) {
      case 'home':
        outputContainer.innerHTML = '<p>Welcome to my resume! Here you will find information about my education, skills, certificates, hobbies, and work experience.</p>';
        break;
      case 'education':
        outputContainer.innerHTML = '<p>Education content goes here. This could include the degrees I have earned, schools I have attended, and relevant academic achievements.</p>';
        break;
      case 'skill':
        outputContainer.innerHTML = '<p>Skills content goes here. This could include the technical and soft skills I possess and my proficiency in each.</p>';
        break;
      case 'certificates':
        outputContainer.innerHTML = '<p>Certificates content goes here. This could include professional certifications I have earned in various fields.</p>';
        break;
      case 'hobby':
        outputContainer.innerHTML = '<p>Hobby content goes here. This could include my personal interests, such as sports, arts, or other activities I enjoy.</p>';
        break;
      case 'work':
        outputContainer.innerHTML = '<p>Work content goes here. This could include my work experience, past job roles, projects, and achievements in the workplace.</p>';
        break;
      default:
        outputContainer.innerHTML = '<p>Click a button to display the content.</p>';
        break;
    }
  }
  