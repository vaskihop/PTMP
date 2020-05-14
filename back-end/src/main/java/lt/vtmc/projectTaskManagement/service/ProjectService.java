package lt.vtmc.projectTaskManagement.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import lt.vtmc.projectTaskManagement.model.Project;

public interface ProjectService {
	List<Project> getProjects(Pageable pageable);
	
	void addProject(Project project);
	
	void deleteProject(Long projectId);
	
	Project findProjecttById(Long projectId);
	
	void updateProject(Long projectId, Project project);
	
	List<Project> findProjectsByTitle(String title, Pageable pageable);

}
