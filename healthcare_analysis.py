# 1️⃣ Import Libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 2️⃣ Load Dataset
df = pd.read_csv("healthcare_dataset.csv")   # Make sure the CSV is in same folder
print("Dataset Loaded Successfully!")
print("-" * 50)

# 3️⃣ Show First 5 Rows
print("FIRST 5 ROWS OF DATA:")
print(df.head())
print("-" * 50)

# 4️⃣ Check Dataset Info
print("DATASET INFORMATION:")
print(df.info())
print("-" * 50)

# 5️⃣ Check Missing Values
print("MISSING VALUES:")
print(df.isnull().sum())
print("-" * 50)

# 6️⃣ Basic Statistics Summary
print("BASIC STATISTICS:")
print(df.describe())
print("-" * 50)

# 7️⃣ Medical Condition Count
print("COUNT OF EACH MEDICAL CONDITION:")
print(df["Medical Condition"].value_counts())
print("-" * 50)

# 8️⃣ Bar Chart Visualization
df["Medical Condition"].value_counts().plot(kind="bar")
plt.title("Medical Condition Count")
plt.xlabel("Medical Condition")
plt.ylabel("Frequency")
plt.show()

# 9️⃣ Average Billing Amount
avg_bill = df["Billing Amount"].mean()
print(f"AVERAGE BILLING AMOUNT: ₹{avg_bill:.2f}")
print("-" * 50)

# 🔟 Average Billing By Gender
print("AVERAGE BILLING AMOUNT BY GENDER:")
print(df.groupby("Gender")["Billing Amount"].mean())
print("-" * 50)

# 1️⃣1️⃣ Save Clean Dataset (Optional)
df.to_csv("healthcare_cleaned.csv", index=False)
print("Cleaned dataset saved as 'healthcare_cleaned.csv'")
