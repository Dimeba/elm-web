// styles
import styles from './Contact.module.scss'

// components
import Button from './Button'
import MapBox from './MapBox'

const Contact = ({ content }) => {
	return (
		<section>
			<div className={`sectionContainer ${styles.contact}`}>
				<MapBox content={content} />

				<div className={styles.form}>
					<h2>{content.fields.title}</h2>

					<form
						name='contact'
						method='POST'
						netlify-honeypot='bot-field'
						data-netlify='true'
						// action='/success'
					>
						<input type='hidden' name='form-name' value='contact' />

						<input
							type='text'
							id='fullName'
							name='fullName'
							placeholder='Full Name'
						/>

						<input
							type='text'
							id='contact'
							name='contact'
							placeholder='Contact'
						/>

						<textarea id='message' name='message' placeholder='Message..' />

						<button type='submit'>
							<Button color='yellow' text='Send' icon='/arrow.svg' animate />
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
