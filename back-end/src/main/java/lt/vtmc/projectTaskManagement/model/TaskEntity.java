package lt.vtmc.projectTaskManagement.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.opencsv.bean.CsvBindByName;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class TaskEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@CsvBindByName
	private Long id;
	@CsvBindByName
	private String taskTitle;
	@CsvBindByName
	private String taskDescription;
	@CsvBindByName
	@Enumerated(EnumType.STRING)
	private Priority taskPriority;
	@CsvBindByName
	@Enumerated(EnumType.STRING)
	private State taskState;

	@CsvBindByName
	@Temporal(TemporalType.DATE)
	private Date createdAtDate;
	@CsvBindByName
	@Temporal(TemporalType.TIME)
	private Date createdAtTime;

	@CsvBindByName
	@Temporal(TemporalType.DATE)
	private Date updatedAtDate;
	@CsvBindByName
	@Temporal(TemporalType.TIME)
	private Date updatedAtTime;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private ProjectEntity project;

	public TaskEntity(String taskTitle, String taskDescription, Priority taskPriority, State taskState,
			ProjectEntity project) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
		this.project = project;

		this.createdAtDate = new Date();
		this.createdAtTime = new Date();
		this.updatedAtDate = new Date();
		this.updatedAtTime = new Date();
	}

	public TaskEntity(Task task, ProjectEntity project) {
		super();
		this.taskTitle = task.getTaskTitle();
		this.taskDescription = task.getTaskDescription();
		this.taskPriority = task.getTaskPriority();
		this.taskState = task.getTaskState();

		this.createdAtDate = new Date();
		this.createdAtTime = new Date();
		this.updatedAtDate = new Date();
		this.updatedAtTime = new Date();

		this.project = project;
	}

	public void updateTask(Task task) {

		this.taskTitle = task.getTaskTitle();
		this.taskDescription = task.getTaskDescription();
		this.taskPriority = task.getTaskPriority();
		this.taskState = task.getTaskState();

		this.updatedAtDate = new Date();
		this.updatedAtTime = new Date();

	}

}
