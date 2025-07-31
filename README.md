# 🔐 Password Generator

A robust and customizable password generation utility designed to create secure, high-entropy passwords via a command-line or graphical interface.

---

## 🎯 Overview

This project provides a flexible password generator that supports:
- 🎛️ Customizable length (e.g. 6–64+ characters)
- ✅ Mix of lowercase, uppercase, numeric, and special characters
- 🧠 Ensures at least one selected character type is included
- 🧰 Optionally supports pronounceable passwords or base64 encoding

---

## 🚀 Features

- Command-line usage with flags for specifying length, count, and character types
- (Optional) Graphical UI using `tkinter` or `customTkinter`
- Supports user-provided custom character sets
- Validates inputs (length range, character type selection)
- Outputs multiple passwords in one run (if desired)

---

## 📦 Installation

Ensure you have Python ≥3.x installed. Then:

```bash
git clone https://github.com/itsanik1201/password-generator.git
cd password-generator
pip install -r requirements.txt
