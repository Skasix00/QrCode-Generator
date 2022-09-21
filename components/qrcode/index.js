import Image from 'next/image';
import bg from '../../images/image-qr-code.png';
import styles from '../../styles/qrcode.module.css';

export default function QRCode() {
	return (
		<div className={styles.qrcode_box}>
			<div className={styles.qrcode_icon}>
				<Image
					alt="qrocde image"
					src={bg}
					layout="intrinsic"
					className={styles.icon}
					width="190px"
					height="190px"
				/>
			</div>
			<div className={styles.width_fixer}>
				<div className={styles.center_1}>
					<p className={styles.box_paragraph_1}>
						Improve your front-end skills by building projects
					</p>
				</div>
				<div className={styles.center_2}>
					<p className={styles.box_paragraph_2}>
						Scan the QR COde to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
}
