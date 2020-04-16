package lt.vtmc.projectTaskManagement.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;

@Entity
@Getter @Setter @NoArgsConstructor
public class TaskEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String taskTitle;
	private String taskDescription;
	@Enumerated(EnumType.STRING)
	private Priority taskPriority;
	@Enumerated(EnumType.STRING)
	private State taskState;
	
	@ManyToOne (cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private ProjectEntity project;

	public TaskEntity(String taskTitle, String taskDescription, Priority taskPriority, State taskState,
			ProjectEntity project) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
		this.project = project;
	}
	
	
	

}
