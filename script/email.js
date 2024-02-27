async function email() {
    try {
        const res = await fetch('https://formspree.io/f/mbjnykbo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            alert("Gracias por escribirnos, te responderemos a la brevedad");
            setFormData({ nombre: "", email: "", mensaje: "" });
          } else {
            alert("Hubo un error al enviar los datos");
          }
    } catch (error) {
        console.log("No se pudo enviar el email. Error: " + error)
    }
}