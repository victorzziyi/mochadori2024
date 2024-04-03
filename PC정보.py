import tkinter as tk
import subprocess

# 컴퓨터 제조번호를 가져오는 함수
def get_serial_number():
    try:
        # WMIC 명령어를 사용하여 제조번호 가져오기
        result = subprocess.run(['wmic', 'bios', 'get', 'serialnumber'], capture_output=True, text=True)
        serial_number = result.stdout.strip().split('\n')[-1]  # 마지막 줄에서 시리얼 번호 가져오기
        return serial_number
    except Exception as e:
        return f"Error: {str(e)}"

# 버튼 클릭 시 라벨 업데이트 함수
def update_label():
    serial_number = get_serial_number()
    label.config(text=serial_number)

# 클립보드에 시리얼 번호 복사 함수
def copy_to_clipboard():
    serial_number = get_serial_number()
    root.clipboard_clear()  # 클립보드 초기화
    root.clipboard_append(serial_number)  # 클립보드에 시리얼 번호 추가
    root.update()  # 클립보드 업데이트

# 프로그램 종료 함수
def close_program():
    root.destroy()

# GUI 생성
root = tk.Tk()
root.title("컴퓨터 시리얼 번호 리더")
root.geometry("300x300")  # 창 크기 설정

# 제조번호를 표시할 라벨 생성
label = tk.Label(root, text="버튼을 클릭하여 시리얼 번호를 가져오세요.", wraplength=280)
label.pack(pady=20)

# 버튼 추가
button_get = tk.Button(root, text="시리얼 번호 가져오기", command=update_label)
button_get.pack(pady=10)

# 복사 버튼 추가
button_copy = tk.Button(root, text="시리얼 번호 복사하기", command=copy_to_clipboard)
button_copy.pack(pady=10)

# 프로그램 종료 버튼 추가
button_close = tk.Button(root, text="프로그램 종료", command=close_program)
button_close.pack(pady=10)

# GUI 실행
root.mainloop()
