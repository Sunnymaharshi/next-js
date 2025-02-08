"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css"
import Image from "next/image";
export default function ImagePicker({ label, name }) {
    const [pickImage, setPickImage] = useState()
    const imageInput = useRef();
    const handleClick = () => {
        imageInput.current.click()
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (!file) {
            setPickImage(null)
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>{!pickImage && <p>No image picked yet.</p>}
                    {pickImage && <Image src={pickImage} alt="picked image" fill />}</div>
                <input className={styles.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} onChange={handleImageChange} required />
                <button className={styles.button} type="button" onClick={handleClick}>Pick an Image</button>
            </div>
        </div>
    );
}