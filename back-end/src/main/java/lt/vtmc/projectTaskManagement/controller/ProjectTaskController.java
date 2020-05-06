package lt.vtmc.projectTaskManagement.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.Task;
import lt.vtmc.projectTaskManagement.model.TaskEntity;
import lt.vtmc.projectTaskManagement.service.ProjectService;
import lt.vtmc.projectTaskManagement.service.TaskService;
import lt.vtmc.projectTaskManagement.util.ProjectTaskCSVWriter;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/projects")
@Api("value=project")
public class ProjectTaskController {
	
	@Autowired
	ProjectService projectService;
	
	@Autowired
	TaskService taskService;
	
	@GetMapping
	@ApiOperation(value="Get projects", notes="Returns registered projects")
	public List<Project> getProjects(){
		return projectService.getProjects();
	}
	
	@GetMapping("/{projectId}")
	@ApiOperation(value="Get project by id", notes="Returns registered project by project's id")
	public Project getProjectById(@PathVariable Long projectId) {
		return projectService.findProjecttById(projectId);
	}
	
	@PostMapping
	@ApiOperation(value="Create projects", notes="Creates project")
	public void addProject(@RequestBody Project project) {
		projectService.addProject(project);
	}
	
	@DeleteMapping("/{projectId}")
	@ApiOperation(value="Delete project by id", notes="Deletes project by project's id")
	public void deleteProject(@PathVariable Long projectId) {
		projectService.deleteProject(projectId);
	}
	
	@PutMapping("/{projectId}")
	@ApiOperation(value="Update project by id", notes="Updates project by project's id")
	public void updateProject(@PathVariable Long projectId, @RequestBody Project project) {
		projectService.updateProject(projectId, project);
	}
	
	//--------->tasks<---------
	
	@GetMapping("/{projectId}/tasks")
	@ApiOperation(value="Get tasks", notes="Returns registered tasks")
	public List<TaskEntity> getTask(@PathVariable Long projectId){
		return taskService.getTasks(projectId);
	}
	
	@GetMapping("/{projectId}/tasks/{taskId}")
	@ApiOperation(value="Get task by id", notes="Returns registered task by task's id")
	public TaskEntity getTaskById(@PathVariable Long taskId) {
		return taskService.findTaskById(taskId);
	}
	
	@PostMapping("/{projectId}/tasks")
	@ApiOperation(value="Create task", notes="Creates task")
	public void addTask(@RequestBody Task task, @PathVariable Long projectId) {
		taskService.addTask(task, projectId);
	}
	@DeleteMapping("/{projectId}/tasks/{taskId}")
	@ApiOperation(value="Delete task by id", notes="Deletes task by task's id")
	public void deleteTask(@PathVariable Long taskId) {
		taskService.deleteTask(taskId);
	}
	
	@PutMapping("/{projectId}/tasks/{taskId}")
	@ApiOperation(value="Update task by id", notes="Updates task by task's id")
	public void updateTask(@PathVariable Long taskId, @RequestBody Task task) {
		taskService.updateTask(taskId, task);
	}
	
	//--------->search<---------
	
	@GetMapping("/projectSearch")
//	@ApiOperation(value="Get tasks", notes="Returns registered tasks")
	public List<Project> projectSearchByTitle(@RequestParam String title){
		return projectService.findProjectsByTitle(title);
	}
	
	@GetMapping("/{projectId}/taskSearch")
//	@ApiOperation(value="Get tasks", notes="Returns registered tasks")
	public List<TaskEntity> taskSearchByIdOrTitle(@PathVariable Long projectId, @RequestParam String idOrTitle){
		return taskService.findTaskByIdOrTitle(idOrTitle, projectId);
	}
	
//	--------->csv<---------
	
	@GetMapping(value="/{projectId}/exportTasks", produces = "text/csv")
	public void exportTasks(HttpServletResponse res, @PathVariable Long projectId) {
		try {
			new ProjectTaskCSVWriter<TaskEntity>().writeProjectOrTaskToCSV(res.getWriter(), taskService.getTasks(projectId));
		} catch (Exception e) {

		}
	}
	
	@GetMapping(value="/exportProjects", produces = "text/csv")
	public void exportProjects(HttpServletResponse res) {
		try {
			new ProjectTaskCSVWriter<Project>().writeProjectOrTaskToCSV(res.getWriter(), projectService.getProjects());
		} catch (Exception e) {

		}
	}

}
