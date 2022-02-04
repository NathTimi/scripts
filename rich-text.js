
(function() {

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Initiate quill editors
     */
    if (select('.quill-editor-default')) {
      new Quill('.quill-editor-default', {
        theme: 'snow'
      });
    }
  
    if (select('.quill-editor-bubble')) {
      new Quill('.quill-editor-bubble', {
        theme: 'bubble'
      });
    }
  
    if (select('.quill-editor-full')) {
      new Quill(".quill-editor-full", {
        modules: {
          toolbar: [
            [{
              font: []
            }, {
              size: []
            }],
            ["bold", "italic", "underline", "strike"],
            [{
                color: []
              },
              {
                background: []
              }
            ],
            [{
                script: "super"
              },
              {
                script: "sub"
              }
            ],
            [{
                list: "ordered"
              },
              {
                list: "bullet"
              },
              {
                indent: "-1"
              },
              {
                indent: "+1"
              }
            ],
            ["direction", {
              align: []
            }],
            ["link", "image", "video"],
            ["clean"]
          ]
        },
        theme: "snow"
      });
    }
  
  })();