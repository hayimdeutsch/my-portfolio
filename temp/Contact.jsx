// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="min-h-screen p-8">
//       <h2 className="text-3xl font-bold">Contact</h2>
//       <p className="text-gray-400 mt-2">Let's connect! Feel free to reach out via email, LinkedIn, or GitHub.</p>
//       <div className="mt-4">
//         <p><strong>Email:</strong> chayimdeutsch@gmail.com</p>
//         <p><strong>Phone:</strong> +972-53-7133082</p>
//         <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/hayim-deutsch" className="text-blue-400">linkedin.com/in/hayim-deutsch</a></p>
//         <p><strong>GitHub:</strong> <a href="https://github.com/hayimdeutsch" className="text-blue-400">github.com/hayimdeutsch</a></p>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Contact = () => {
  return (
    <Box id="contact" sx={{ minHeight: '100vh', p: 8 }}>
      <Typography variant="h4" component="h2">
        Contact
      </Typography>
      <Typography color="textSecondary" mt={2}>
        Let's connect! Feel free to reach out via email, LinkedIn, or GitHub.
      </Typography>
      <Stack spacing={2} mt={4}>
        <Typography><strong>Email:</strong> chayimdeutsch@gmail.com</Typography>
        <Typography><strong>Phone:</strong> +972-53-7133082</Typography>
        <Typography><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/hayim-deutsch" color="primary">linkedin.com/in/hayim-deutsch</Link></Typography>
        <Typography><strong>GitHub:</strong> <Link href="https://github.com/hayimdeutsch" color="primary">github.com/hayimdeutsch</Link></Typography>
      </Stack>
      <Button variant="contained" color="primary" href="mailto:chayimdeutsch@gmail.com" sx={{ mt: 4 }}>
        Email Me
      </Button>
    </Box>
  );
};

export default Contact;