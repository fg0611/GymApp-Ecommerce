/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Files from "react-files";
import { storage } from "../../firebase";
import firebase from "../../firebase";
import "./FileLoader.css";

export default function FileLoader({ submit }) {
  const [filename, setFilename] = useState("");

  const filetypes = ["image/png", "image/jpg", "image/jpeg"];

  const onFilesChange = (files) => {
    const metadata = {
      contentType: `${files.extension}`,
    };
    const storageRef = storage.ref("/tour/");
    const uploadTask = storageRef.child(files[0].name).put(files[0], metadata);

    uploadTask.on(
      "state_changed",
      function upLoad(snapshot) {
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            break;
          default:
            return null;
        }
        return null;
      },
      function handleError(error) {
        return error;
      },
      function handleFinish() {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(function handleUrl(downloadURL) {
            submit(downloadURL);
            return downloadURL;
          });
      }
    );
    setFilename(files[0].name);
  };

  return (
    <div className="fileSelect">
      <Files
        className="files-dropzone"
        accepts={filetypes}
        onChange={onFilesChange}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        <div className="innerInput">
          <p>Subir Imagen</p>
        </div>
      </Files>
      <div className="fileName">
        <p>
          {filename !== ""
            ? filename.slice(0, filename.length / 3) + "..."
            : "Nombre del Archivo"}
        </p>
      </div>
    </div>
  );
}
